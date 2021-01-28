import * as React from 'react';
import {
  DiagramEngine,
  DiagramModel,
  DefaultNodeModel,
  DiagramWidget,
  NodeWidget
} from "storm-react-diagrams";
import "./DiagramComponent.scss";

function DiagramComponent({ newNodeIndex, xProps, yProps  }) {
    var engine = new DiagramEngine();
    var model = new DiagramModel();

    const ElmArchitecture = () => {            
        //1) setup the diagram engine
        engine.installDefaultFactories();

        //2) setup the diagram model

        //3-A) create a default node
        var node1 = new DefaultNodeModel("Model", "rgb(0,192,255)");
        let port1 = node1.addOutPort(" ");
        node1.setPosition(100, 100);

        //3-B) create another default node
        var node2 = new DefaultNodeModel("view", "rgb(192,255,0)");
        let port2 = node2.addInPort("Model");
        let port3 = node2.addOutPort("Html");
        node2.setPosition(xProps, yProps);

        const addNode = () => {
            const newNode = new DefaultNodeModel(`New Node${newNodeIndex}`, "rgb(192,131,0)")
            // let newPort1 = newNode.addInPort('Ent');
            // let newPort2 = newNode.addOutPort("Exit")
            newNode.setPosition(xProps + 230, yProps + 20)
            // let link3 = port3.link(newPort1)

            model.addNode(newNode);

            engine.repaintCanvas();
        }

        React.useEffect(() => {
            addNode();
        }, [newNodeIndex]);

        React.useEffect(() => {
            model.addAll(node1, node2, link1);
        }, []);

        // link the ports
        let link1 = port1.link(port2);
        //link1.addLabel("Hello World!");

        // let link2 = port3.link(port);

        //4) add the models to the root graph

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
