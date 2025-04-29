import React, { useEffect, useRef } from 'react';
import { Rect, Circle, Star, Transformer } from 'react-konva';

const ShapeRenderer = ({ shape, isSelected, onSelect, onChange }) => {
  const shapeRef = useRef();
  const trRef = useRef();

  useEffect(() => {
    if (isSelected && trRef.current && shapeRef.current) {
      trRef.current.nodes([shapeRef.current]);
      trRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  const handleTransformEnd = () => {
    const node = shapeRef.current;
    const scaleX = node.scaleX();
    const scaleY = node.scaleY();

    node.scaleX(1);
    node.scaleY(1);

    if (shape.type === 'rect') {
      onChange({
        ...shape,
        width: Math.max(20, node.width() * scaleX),
        height: Math.max(20, node.height() * scaleY),
      });
    } else if (shape.type === 'circle') {
      const newRadius = Math.max(10, shape.radius * scaleX); // uniform scale
      onChange({
        ...shape,
        radius: newRadius,
      });
    } else if (shape.type === 'star') {
      const newOuter = Math.max(10, 40 * scaleX);
      const newInner = newOuter / 2;
      onChange({
        ...shape,
        outerRadius: newOuter,
        innerRadius: newInner,
      });
    }
  };

  return (
    <>
      {shape.type === 'rect' && (
        <Rect
          ref={shapeRef}
          x={shape.x}
          y={shape.y}
          width={shape.width}
          height={shape.height}
          fill="skyblue"
          draggable
          onClick={onSelect}
          onTap={onSelect}
          onTransformEnd={handleTransformEnd}
        />
      )}
      {shape.type === 'circle' && (
        <Circle
          ref={shapeRef}
          x={shape.x}
          y={shape.y}
          radius={shape.radius}
          fill="skyblue"
          draggable
          onClick={onSelect}
          onTap={onSelect}
          onTransformEnd={handleTransformEnd}
        />
      )}
      {shape.type === 'star' && (
        <Star
          ref={shapeRef}
          x={shape.x}
          y={shape.y}
          numPoints={5}
          innerRadius={shape.innerRadius || 20}
          outerRadius={shape.outerRadius || 40}
          fill="skyblue"
          draggable
          onClick={onSelect}
          onTap={onSelect}
          onTransformEnd={handleTransformEnd}
        />
      )}
      
      {isSelected && (
        <Transformer
          ref={trRef}
          enabledAnchors={['top-left', 'top-right', 'bottom-left', 'bottom-right']}
          boundBoxFunc={(oldBox, newBox) => {
            if (newBox.width < 20 || newBox.height < 20) return oldBox;
            return newBox;
          }}
        />
      )}
    </>
  );
};

export default ShapeRenderer;
