import * as React from 'react';
import {
  DiagramEngine,
  DiagramModel,
  DefaultNodeModel,
  DiagramWidget,
} from "storm-react-diagrams";

import "./DiagramComponent.scss";

function DiagramComponent({ xProps, yProps  }) {

var engine = new DiagramEngine();

const ElmArchitecture = () => {
  //1) setup the diagram engine
  engine.installDefaultFactories();

  //2) setup the diagram model
  var model = new DiagramModel();

  //3-A) create a default node
  var node1 = new DefaultNodeModel("Model", "rgb(0,192,255)");
  let port1 = node1.addOutPort(" ");
  node1.setPosition(100, 100);

  //3-B) create another default node
  var node2 = new DefaultNodeModel("view", "rgb(192,255,0)");
  var node3 = new DefaultNodeModel("herp", "rgb(192,1,0)");
  let port2 = node2.addInPort("Model");
  let port3 = node2.addOutPort("Html");
  let port = node3.addOutPort("Ex")
  node2.setPosition(xProps, yProps);
  node3.setPosition(200, 200)

  // link the ports
  let link1 = port1.link(port2);
  //link1.addLabel("Hello World!");

  let link2 = port3.link(port);

  //4) add the models to the root graph
  model.addAll(node1, node2, node3, link1, link2);

  //5) load model into engine
  engine.setDiagramModel(model);

  //6) render the diagram!
  return <DiagramWidget className="srd-demo-canvas" diagramEngine={engine} />;
};

  return (
    <>
      <ElmArchitecture />
    </>
  );
}


export default DiagramComponent;
