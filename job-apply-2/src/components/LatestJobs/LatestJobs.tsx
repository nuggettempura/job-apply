import { useEffect, useState, useMemo } from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import useMediaQuery from '../../hooks/useMediaQuery';

// Define types for the job data
interface Job {
  id: number;
  job_title: string;
  income_range: string;
  location: string;
  job_description: string;
}

// Static fallback data
const CardData: Job[] = [
  {
    id: 1,
    job_title: "Lorem ipsum dolor sit amet",
    income_range: "MYR3,500 - MYR4,500",
    location: "MY",
    job_description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, amet voluptas! Ut eaque architecto vero eos commodi quasi reiciendis eligendi"
  },
  {
    id: 2,
    job_title: "Lorem ipsum dolor sit amet",
    income_range: "MYR3,500 - MYR4,500",
    location: "MY",
    job_description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, amet voluptas! Ut eaque architecto vero eos commodi quasi reiciendis eligendi"
  },
  // Add more job entries as needed...
];

function LatestJobs() {
  const [index, setIndex] = useState<number>(0);
  const [jobList, setJobList] = useState<Job[]>([]); // Store job data
  const [isFetching, setIsFetching] = useState<boolean>(true); // Control when to stop fetching
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  // Helper function to chunk array into groups for larger screens
  const chunkArray = <T,>(array: T[], chunkSize: number): T[][] => {
    const results: T[][] = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      results.push(array.slice(i, i + chunkSize));
    }
    return results;
  };

  const getAllJobs = async (signal: AbortSignal) => {
    try {
      const response = await fetch("http://localhost:5000/getAllJobs", { signal });
      if (!response.ok) {
        throw new Error("Failed to fetch jobs");
      }
      const jsonData: Job[] = await response.json();

      if (JSON.stringify(jsonData) !== JSON.stringify(jobList)) {
        setJobList(jsonData);
      }
    } catch (error: any) {
      if (error.name !== 'AbortError') {
        console.error("Error fetching jobs:", error);
      }
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    if (isFetching) {
      getAllJobs(signal);
    }

    // Stop fetching after 5 seconds
    const timeoutId = setTimeout(() => {
      setIsFetching(false);
      controller.abort(); // Cancel the API call if still running
    }, 5000);

    return () => {
      clearTimeout(timeoutId);
      controller.abort(); // Cleanup if the component unmounts
    };
  }, [isFetching, jobList]); // Run when fetching or jobList changes

  // Memoize the jobList or fallback to CardData
  const memoizedData = useMemo<Job[]>(() => {
    return jobList.length > 0 ? jobList : CardData;
  }, [jobList]);

  // Chunk data into groups of 3 for larger screens
  const cardGroups = isAboveMediumScreens ? chunkArray(memoizedData, 3) : memoizedData.map((card) => [card]);

  return (
    <Container className='z-1 pb-5' style={{ position: 'relative' }}>
      <Row className='d-flex justify-content-center align-items-center'>
        <Col>
          <h1 className='text-center font-regular'>Latest Jobs</h1>
        </Col>
      </Row>

      {/* Carousel will display one or multiple cards based on screen size */}
      <Carousel
        className='w-100 d-flex justify-content-center align-items-center'
        activeIndex={index}
        onSelect={handleSelect}
      >
        {cardGroups.map((group, idx) => (
          <Carousel.Item key={idx}>
            <Row className="d-flex justify-content-center">
              {group.map((job: Job) => (
                <Col key={job.id} lg={4} className='mb-4'>
                  <Card
                    className='w-100 h-full card-hover-effect'
                    style={{ backgroundColor: "#FF9100", borderRadius: 0, border: 'none', color: '#f5f5f7' }}
                  >
                    <Card.Body className='p-4'>
                      <Card.Title className='card-title'>{job.job_title}</Card.Title>
                      <Card.Text className='card-text'>
                        {job.income_range} | {job.location}
                      </Card.Text>
                      <Card.Text className='card-text'>
                        {job.job_description}
                      </Card.Text>
                    </Card.Body>
                    <div className='d-flex justify-content-end m-0'>
                      <Button
                        className='bg-light text-dark font-regular btn-hover-effect'
                        style={{ borderRadius: 0, border: 'none' }}
                      >
                        Apply
                      </Button>
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
}

export default LatestJobs;
