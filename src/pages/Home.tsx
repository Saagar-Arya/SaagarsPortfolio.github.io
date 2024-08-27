import { Box, Heading, Text, Image, Flex, SimpleGrid, Stack, Card, CardBody, Button, CardFooter, Divider } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Gallery from './Gallery';

const Home = () => {
  const basePath = '/Gallery/';

  const imageNames = [
    'Lidar Output.png',
    'ColorExample.jpg',
    'DroneSchematic.png',
    'Drone PCB.png',
    'DroneIcon.jpg',
    'SkullClamp.png',
    'SystemDraft1.jpg',
    'PCBDraft3.jpg',
    'blender.png',
    'capsule_plate.png',
    'effortless.png',
    'EffortlessHex.jpg',
    'EffortlessMini.jpg',
    'EffortlessMiniRender.jpg',
    'Rover_Icon.jpg',
    'EffortlessWheelguard.jpg',
    'final_plate.png',
    'FluteFull.jpg',
    'Full Robot.jpg',
    'SealPic1.JPG',
    'SealPic2.JPG',
    'Hexapod(LayedOut).jpg',
    'HexapodStanding.jpg',
    'InverseExample.jpg',
    'Lawnmower.jpg',
    'PCBDraft2Skeleton.jpg',
    'PCBDraft2Strapped.jpg',
    'PinDraft2.jpg',
    'Pin_Render_Poster_Quick2.png',
    'Rest Alone.jpg',
    'RoboSubIcon.jpg',
    'robot_render.png',
    'RoverPath.png',
    'SingleREst.jpg',
    'thelawnmower.png',
    'TighetningPin.jpg',
    'Titanium Top Plate.jpg',
    'Torpedos.jpg',
    'trigger2.png',
    'wedgie.png',
    'xPrizeMiniDrone.jpg',
  ];

  const images = imageNames.map(name => `${basePath}${name}`);

  return (
    <Box p={4}>
      <Heading mb={4}>Welcome to Saagar's Portfolio</Heading>

      <Flex direction={{ base: 'column', md: 'row' }} align="center" justify="center" mb={8}>
        <Box flex="1" display="flex" justifyContent="center" alignItems="center" mr={{ base: 0, md: 4 }} mb={{ base: 4, md: 0 }}>
          <Image
            src="/assets/GoodProfilePicSquare.JPG"
            alt="Profile"
            borderRadius="md"
            width={{ base: "75%", md: "50%" }}
            objectFit="cover"
          />
        </Box>
        <Box flex="1" display="flex" justifyContent="center" alignItems="center" bg="white" p={4} borderRadius="md" boxShadow="md">
          <Text fontSize="lg" textAlign="center">
            Welcome to my portfolio! I'm Saagar Arya, a student at Duke University, double majoring in Computer Science and Electrical and Computer Engineering. I thrive on interdisciplinary learning, where I apply theoretical concepts to physical creations and use my skills in robotics and engineering to develop innovative solutions.          </Text>
        </Box>
      </Flex>

      <Box bg="gray.200" p={4} borderRadius="md" boxShadow="md" textAlign="center" mb={6}>
        <Gallery images={images} />
      </Box>

      <SimpleGrid columns={{ base: 2, md: 3 }} spacing={4} mb={4}>
        <Card overflow='hidden' variant='outline' maxW='lg'>
          <CardBody>
            <Image
              objectFit='cover'
              maxW={{ base: '100%', sm: '200px' }}
              src='/Gallery/SkullClamp.png'
              alt='Head Clamp'
              mx="auto"
              borderRadius={'md'}
              mt={2}
            />
            <Stack>
              <Heading size='md' pt={2}>Head Clamp</Heading>
              <Text py='2' fontSize="md" noOfLines={[15]}>
                The head clamp is a tool used in neurosurgery to immobilize the patient's head during procedures. However, it currently lacks a digital method to monitor the pressure applied by the clamp. Our project enhances the clamp by integrating sensors into the pins, along with circuitry to capture and process the electrical signals corresponding to strain. These signals are then accurately converted into pressure readings, which are displayed to the neurosurgeon. This system provides real-time pressure monitoring during the clamp's setup and throughout the surgery, alerting the surgeon to any changes in pressure. *Patent Pending*
              </Text>
              <Divider mt={2} />
            </Stack>
            <CardFooter>
              <Button
                as={RouterLink}
                to="/head-clamp"
                variant='solid'
                colorScheme='blue'
                _hover={{ bg: "teal.700" }}
              >
                Read More
              </Button>
            </CardFooter>
          </CardBody>
        </Card>
        <Card overflow='hidden' variant='outline' maxW='lg'>
          <CardBody>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} justifyItems="center">
              <Image
                objectFit='cover'
                maxW={{ base: '100%', sm: '200px' }}
                src='/assets/Seal_Icon.jpg'
                alt='Seal Icon'
                mx="auto"
                borderRadius={'md'}
                mt={2}
              />
              <Image
                objectFit='cover'
                maxW={{ base: '100%', sm: '200px' }}
                src='/assets/Rover_Icon.jpg'
                alt='Rover Icon'
                mx="auto"
                borderRadius={'md'}
                mt={2}
              />
            </SimpleGrid>
            <Stack>
              <Heading size='md' pt={2}>MaRRS Research</Heading>
              <Text py='2' fontSize="md" noOfLines={[10]}>
                The Marine Robotics and Remote Sensing Lab uses drone imagery to monitor seal populations and their habitats. I trained segmentation models to detect seals and analyze their habitat preferences about environmental variables like ice density (90% accuracy). Another project involved mounting an autonomous rover with a Lidar sensor to create accurate 3D replicas (digital twins) of surveyed areas.
              </Text>
              <Divider mt={2} />
            </Stack>
            <CardFooter>
              <Button
                as={RouterLink}
                to="/marrs-research"
                variant='solid'
                colorScheme='blue'
                _hover={{ bg: "teal.700" }}
              >
                Read More
              </Button>
            </CardFooter>
          </CardBody>
        </Card>
        <Card overflow='hidden' variant='outline' maxW='lg'>
          <CardBody>
            <Image
              objectFit='cover'
              maxW={{ base: '100%', sm: '200px' }}
              src='/Gallery/robot_render.png'
              alt='Duke Robotics Club'
              mx="auto"
              borderRadius={'md'}
              mt={2}
            />
            <Stack>
              <Heading size='md' pt={2}>Duke Robotics Club</Heading>
              <Text py='2' fontSize="md" noOfLines={[10]}>
                As part of the Duke Underwater Robotics Club, I contributed to the development of an autonomous underwater robot designed to maneuver and complete various tasks. My role involved fabricating a titanium top plate to secure key components, modualar sensor mounts, and a spring loaded torpedo system. My work contributed to our 8th place finish at Robosub 2024.              </Text>
              <Divider mt={2} />
            </Stack>
            <CardFooter>
              <Button
                as={RouterLink}
                to="/duke-robotics"
                variant='solid'
                colorScheme='blue'
                _hover={{ bg: "teal.700" }}
              >
                Read More
              </Button>
            </CardFooter>
          </CardBody>
        </Card>
        <Card overflow='hidden' variant='outline' maxW='lg'>
          <CardBody>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} justifyItems="center">
              <Image
                objectFit='cover'
                maxW={{ base: '100%', sm: '200px' }}
                src='/assets/DroneIcon.jpg'
                alt='Drone Icon'
                mx="auto"
                borderRadius={'md'}
                mt={2}
              />
              <Image
                objectFit='cover'
                maxW={{ base: '100%', sm: '200px' }}
                src='/Gallery/Rest Alone.jpg'
                alt='Drone Icon'
                mx="auto"
                borderRadius={'md'}
                mt={2}
              />
            </SimpleGrid>
            <Stack>
              <Heading size='md' pt={2}>High School</Heading>
              <Text py='2' fontSize="md" noOfLines={[10]}>
                During high school, I found various engineering projects, including designing and fabricating combat robots for Antweight and Beetleweight divisions. I developed a hexapod with interconnected limbs and programmed it using Arduino, and collaborated on creating a custom drone PCB and Arduino-based firmware. Additionally, I founded an Etsy store featuring a 3D-printed flute rest, for which I was granted a utility patent.
              </Text>
              <Divider mt={2} />
            </Stack>
            <CardFooter>
              <Button
                as={RouterLink}
                to="/highschool"
                variant='solid'
                colorScheme='blue'
                _hover={{ bg: "teal.700" }}
              >
                Read More
              </Button>
            </CardFooter>
          </CardBody>
        </Card>
      </SimpleGrid>
      <Box bg="gray.200" p={4} borderRadius="md" boxShadow="md" textAlign="center" mb={6}>
        <Heading size="md" mb={4}>Skills & Tools</Heading>
        <SimpleGrid columns={{ base: 3, md: 5 }} spacing={8} justifyItems="center">
          <Text fontSize="lg">Machine Learning</Text>
          <Text fontSize="lg">{'Extract, Transform, Load (ETL)'}</Text>
          <Text fontSize="lg">Python</Text>
          <Text fontSize="lg">Java</Text>
          <Text fontSize="lg">React.js</Text>
          <Text fontSize="lg">Spring Framework</Text>
          <Text fontSize="lg">Web Development</Text>
          <Text fontSize="lg">Circuit Design</Text>
          <Text fontSize="lg">{'Printed Circuit Board (PCB) Design'}</Text>
          <Text fontSize="lg">Electrical Troubleshooting</Text>
          <Text fontSize="lg">Altium</Text>
          <Text fontSize="lg">Autodesk Eagle</Text>
          <Text fontSize="lg">CAD/CAM</Text>
          <Text fontSize="lg">Autodesk Fusion 360</Text>
          <Text fontSize="lg">Solidworks</Text>
          <Text fontSize="lg">3D Printing</Text>
          <Text fontSize="lg">CNC</Text>
          <Text fontSize="lg">Laser Cutting</Text>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Home;
