import Canvas from "./Components/Canvas";


function App() {
  return (
    <div >
      <Canvas/>
    </div>
  );
}

export default App;


// import React from 'react';

// function App() {
//   return (
//     <div style={{ height: "100vh", width: "100vw", backgroundColor: "black", display: "flex", flexDirection: "column" }}>
//       {/* Navbar */}
//       <div style={{ height: "50px", backgroundColor: "white", borderBottom: "1px solid #ccc", display: "flex", alignItems: "center", padding: "0 16px" }}>
//         <div>Navbar</div>
//       </div>

//       {/* Canvas */}
//       <div
//         style={{
//           flex: 1,
//           backgroundColor: "#ffffff",
//           backgroundImage: "radial-gradient(#c4c4c4 1px, transparent 1px)",
//           backgroundSize: "20px 20px",
//         }}
//       >
//         {/* Floating toolbars */}
//         <div style={{ position: "absolute", bottom: "16px", left: "16px", backgroundColor: "white", padding: "8px", border: "1px solid #ccc", borderRadius: "8px" }}>
//           Zoom Controls
//         </div>
//         <div style={{ position: "absolute", bottom: "16px", right: "16px", backgroundColor: "white", padding: "8px", border: "1px solid #ccc", borderRadius: "8px" }}>
//           Other Buttons
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
