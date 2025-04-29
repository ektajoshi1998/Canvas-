
import React, { useRef, useState } from 'react';
import { Stage, Layer } from 'react-konva';
// import { Button } from '@mui/material';
import Navbar from './NavBar';
import ShapePickerDialog from "./ShapePicker";
import ShapeRenderer from "./ShapeRender";
import ShapeDialog from './Dialog';

const Canvas = () => {
  const [shapes, setShapes] = useState([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedShapeType, setSelectedShapeType] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const stageRef = useRef();

  const handleCanvasClick = (e) => {
    if (!selectedShapeType) return;

    const stage = stageRef.current.getStage();
    const pointer = stage.getPointerPosition();

    const newShape = {
      id: Date.now(),
      type: selectedShapeType,
      x: pointer.x,
      y: pointer.y,
      width: 100,
      height: 100,
      radius: 50,
    };

    setShapes([...shapes, newShape]);
    setSelectedShapeType(null);
  };

  return (
    <div className="p-4">

<Navbar onAddShapeClick={() => setDialogOpen(true)} />

      {/* <div className="flex justify-center gap-4 mb-4">
        <Button onClick={() => setDialogOpen(true)}></Button>
      </div> */}

      <ShapeDialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        onSelectShape={(shapeType) => {
          setSelectedShapeType(shapeType);
          setDialogOpen(false);
        }}
      />

      <Stage
        width={window.innerWidth}
        height={window.innerHeight - 100}
        ref={stageRef}
        onMouseDown={(e) => {
          // Deselect when clicking outside
          if (e.target === e.target.getStage()) {
            setSelectedId(null);
          }
        }}
        onClick={handleCanvasClick}
        style={{ backgroundSize: '20px 20px', backgroundImage: 'radial-gradient(#ccc 1px, transparent 1px)' }}
      >
        <Layer>
          {shapes.map((shape) => (
            <ShapeRenderer
  key={shape.id}
  shape={shape}
  isSelected={shape.id === selectedId}
  onSelect={() => setSelectedId(shape.id)}
  onChange={(newAttrs) => {
    const updatedShapes = shapes.map((sh) =>
      sh.id === shape.id ? newAttrs : sh
    );
    setShapes(updatedShapes);
  }}
/>

          ))}
        </Layer>
      </Stage>
    </div>
  );
};

export default Canvas;
