import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { getKids, sortedKids } from '../api/Api';
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const MainApp = () => {
  const [imageState, setImageState] = useState<Array<{}>>([])
  const [state, setState] = useState<Array<{}>>([])
  const [sortedState, setSortedState] = useState<Array<{}>>([]);

  useEffect(() =>{
    getKids().then((res) =>{
      console.log(state)
      setState(res);
    })

    sortedKids().then((res) => {
      setSortedState(res);
    });

    sortedKids().then((res) =>{
      console.log(imageState)
      setImageState(res)
    })
  },[])

  const onDrag = (res: any) => {
    // console.log(res);
    const { source, destination } = res;

    let data = Array.from(state);
    let [newData] = data.splice(source.index, 1);
    data.splice(destination.index, 0, newData);

    setState(data);
  };

  console.log(state);


  return (
    <DragDropContext onDragEnd={onDrag}>
      <Container>
        <Main>
            <Droppable droppableId='stateDragnDrop'>
            {(props) =>(
              <Hold {...props.droppableProps} ref={props.innerRef}>
              <Text>Word</Text>

              {state?.map((props: any, i: number) =>(
                <Draggable draggableId={props._id} key={props._id} index={i}>
                  {(prov) =>{
                    return(
                      <Box
                    key={props._id}
                    {...prov.dragHandleProps}
                    {...prov.draggableProps}
                    ref={prov.innerRef}
                  >
                    {props.name}
                  </Box>
                    )
                }}
                </Draggable>
              ))}
              {props.placeholder}
          </Hold>
            )}
            </Droppable>
            <Hold>
                <Text>Image</Text>

                <FlexImage>
                  {imageState?.map((props: any) =>{
                      return(
                        <Image key={props._id} src={props.image}/>
                      )
                  })}
                </FlexImage>
            </Hold>
        </Main>
      </Container>
    </DragDropContext>
  )
}

export default MainApp;
const FlexImage = styled.div`
  display: flex;
  flex-direction: column;
`;
const Image = styled.img`
  height: 50px;
  border: 1px solid silver;
  border-radius: 5px;
  margin: 10px;
  object-fit: cover;
`
const Box = styled.div`
  margin: 10px;
  border: 1px solid silver;
  padding: 0 10px;
  border-radius: 5px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Text = styled.div``
const Hold = styled.div`
    border-radius: 5px;
    margin: 10px 30px;
    border: 1px solid silver;
    padding: 10px;
`
const Main = styled.div`
    border: 1px solid silver;
    border-radius: 5px;
    padding: 20px 30px;
    display: flex;
    align-items: center;
`
const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
