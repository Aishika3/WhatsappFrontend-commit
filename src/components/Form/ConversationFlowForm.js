import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './CoversationFlow.css';

const uniqueRootId = 'root_' + uuidv4();
const ConversationFlowForm = () => {
  const initialJson = {
    [uniqueRootId]: {
      id: uniqueRootId,
      message: '',
      options: [],
      parent: null,
      depth: 0
    },
  };

  const [json, setJson] = useState(initialJson);

  const handleReset = () => {
    setJson(initialJson);
  };

  const countNodes = () => {
    return Object.keys(json).length;
  };

  const createNodeTemplate = (parentId = null, message = '',parent_depth) => ({
    id: uuidv4(),
    message: message,
    options: [],
    parent: parentId,
    depth: parent_depth+1
  });

  const handleAddNode = (parentId=uniqueRootId,message="",option="") => {
    if (json[parentId].options.length >= 4){
      alert("Sorry, only 4 options allowed!");
      return;
    }

    if (countNodes() >= 64) {
      alert("Sorry, no more than 64 nodes allowed!");
      return;
    }

    const depth = json[parentId].depth
    if (depth >= 10){
      alert("Sorry, not more than 10 messages allowed in a single thread");
      return;
    }
    
    const newNode = createNodeTemplate(parentId, message, depth);
    const updatedJson = { ...json, [newNode.id]: newNode };

    const parentNode = updatedJson[parentId];
    parentNode.options.push({id: newNode.id, option});
    updatedJson[parentId] = parentNode;

    setJson(updatedJson);
  };

  const handleAddChildNode = (parentId) => {
    let option = null;
    if (parentId === uniqueRootId && json[parentId].options.length > 0){
      alert("Sorry you can't send two messages for user initiated messages!");
      return;
    }
    if (parentId !== uniqueRootId) {
      option = prompt('Enter the option to go to the nested question:');
    }
    const message = prompt('Enter the nested question:');
    
    if (message !== null && (option !== null || parentId === uniqueRootId)) {
      handleAddNode(parentId, message, option);
    }
  };

  const handleEditMessage = (nodeId) => {
    const currentNode = json[nodeId];
    const message = prompt('Edit the message:', currentNode.message);

    if (message !== null) {
      const updatedNode = { ...currentNode, message };
      setJson({ ...json, [nodeId]: updatedNode });
    }
  };

  const handleDeleteMessage = (nodeId) => {
    const updatedJson = { ...json };
    const parentNodeId = updatedJson[nodeId].parent;
    
    updatedJson[parentNodeId].options = updatedJson[parentNodeId].options.filter(option => option.id !== nodeId);
    delete updatedJson[nodeId];

    setJson(updatedJson);
  };

  const renderNode = (nodeId) => {
    const node = json[nodeId];
    console.log(node);
    
    const childNodes = (node && node.options.length>0) ? node.options.map(option => (
      <>
        <p>{option.option}</p>
        <div className="connector"></div>
        {renderNode(option.id)}
      </>
    )) : <p>No options created yet</p>;
    const isRootNode = nodeId === uniqueRootId;
  
    return (
      <div
        key={node.id}
        className={`node depth-${node.depth}`}
      >
        <div>
          <p>{isRootNode ? 'Start Conversation' : node.message}</p>
          <button onClick={() => handleAddChildNode(node.id)} class="bg-transparent hover:bg-PrimaryCyan text-PrimaryCyan font-semibold hover:text-white py-2 px-4 border-2 border-PrimaryCyan hover:border-transparent rounded">
            {isRootNode ? 'Add the first message' : '+'}
          </button>
          {!isRootNode && (
            <>
              <button onClick={() => handleEditMessage(node.id)} style={{ marginLeft: '30px' }} class="bg-transparent hover:bg-PrimaryCyan text-PrimaryCyan font-semibold hover:text-white py-2 px-4 border-2 border-PrimaryCyan hover:border-transparent rounded">
                Edit message
              </button>
              <button onClick={() => handleDeleteMessage(node.id)} style={{ marginLeft: '30px' }} class="bg-transparent hover:bg-PrimaryCyan text-PrimaryCyan font-semibold hover:text-white py-2 px-4 border-2 border-PrimaryCyan hover:border-transparent rounded">
                Delete message
              </button>
            </>
          )}
        </div>
        <div className="nested">{childNodes}</div>
      </div>
    );
  };

  const handleSubmit = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(json));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "conversation_flow.json");
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  return (
    <div className="conversation-flow-builder">
      <h1 class="text-PrimaryCyan">Build Your Interactive Whatsapp Conversation</h1>
      <div>
        {Object.keys(json)
          .filter((nodeId) => json[nodeId].parent === null)
          .map(renderNode)}
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
        <button onClick={handleReset} class="bg-transparent hover:bg-PrimaryCyan text-PrimaryCyan font-semibold hover:text-white py-2 px-4 border-2 border-PrimaryCyan hover:border-transparent rounded">Reset conversation</button>
        <button onClick={handleSubmit} class="bg-transparent hover:bg-PrimaryCyan text-PrimaryCyan font-semibold hover:text-white py-2 px-4 border-2 border-PrimaryCyan hover:border-transparent rounded">Save Form</button>
      </div>
    </div>
  );
};

export default ConversationFlowForm;

