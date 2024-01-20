import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { Container } from 'react-bootstrap';
import { SortableContext, arrayMove, verticalListSortingStrategy } from '@dnd-kit/sortable';
import SortableItem from './components/SortableItem';

function App() {
  const [languages, setLanguages] = useState(["JavaScript", "Python", "Typescript"]);

  function handleDragEnd(event) {
    const { active, over } = event;
    console.log("Drag end called!");
    console.log("Active: " + active.id);
    console.log("Over: " + over.id);

    if (active.id !== over.id) {
      setLanguages((item) => {
        const activeIndex = item.indexOf(active.id);
        const overIndex = item.indexOf(over.id);

        return arrayMove(item, activeIndex, overIndex);
      });
    }
  }

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <Container className='p-3' style={{ width: "50%" }} align="center">
        <h3>The best programming languages!</h3>
        <SortableContext items={languages} strategy={verticalListSortingStrategy}>
          {languages.map(language => (
            <SortableItem key={language} id={language}></SortableItem>
          ))}
        </SortableContext>
      </Container>
    </DndContext>
  );
}

export default App;
