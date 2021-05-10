import { Box, Flex, Text } from "@chakra-ui/layout";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <DragDropContext onDragEnd={() => console.log("On drag end")}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {dummyData
                .sort((a, b) => (a.sequence_no > b.sequence_no ? 1 : -1))
                .map((item, index) => (
                  <Draggable
                    key={item.id}
                    draggableId={item.id.toString()}
                    index={index}
                  >
                    {(provided) => (
                      <Box
                        bg="white"
                        shadow="base"
                        p={4}
                        mb={2}
                        borderWidth="1px"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <Box>
                          <Text>{`#${item.sequence_no}. ${item.title}`}</Text>
                        </Box>
                      </Box>
                    )}
                  </Draggable>
                ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

const dummyData = [
  {
    id: 1,
    sequence_no: 1,
    title: "The Avengers",
    release_year: 2012,
  },
  {
    id: 2,
    sequence_no: 2,
    title: "The Avengers - Age of Ultron",
    release_year: 2016,
  },
  {
    id: 3,
    sequence_no: 3,
    title: "The Avengers - Infinity War",
    release_year: 2019,
  },
  {
    id: 4,
    sequence_no: 4,
    title: "The Avengers - End Game",
    release_year: 2020,
  },
];
