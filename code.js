var cy = cytoscape({
  container: document.getElementById('cy'),

  boxSelectionEnabled: false,
  autounselectify: true,
  userZoomingEnabled: false,

  style: cytoscape.stylesheet()
    .selector('node')
      .style({
        'content': 'data(id)'
      })
    .selector('edge')
      .style({
        'curve-style': 'bezier',
        'target-arrow-shape': 'triangle',
        'width': 4,
        'line-color': '#ddd',
        'target-arrow-color': '#ddd'
      })
    .selector('.highlighted')
      .style({
        'background-color': '#61bffc',
        'line-color': '#61bffc',
        'target-arrow-color': '#61bffc',
        'transition-property': 'background-color, line-color, target-arrow-color',
        'transition-duration': '0.5s'
      }),

  elements: {
      nodes: [
        { data: { id: 'a', discovered: false } },
        { data: { id: 'b', discovered: false } },
        { data: { id: 'c', discovered: false } },
        { data: { id: 'd', discovered: false } },
        { data: { id: 'e', discovered: false } },
        { data: { id: 'f', discovered: false } },
        { data: { id: 'g', discovered: false } }
      ],

      edges: [
        { data: { id: 'ae', weight: 1, source: 'a', target: 'e' } },
        { data: { id: 'ab', weight: 3, source: 'a', target: 'b' } },
        { data: { id: 'be', weight: 4, source: 'b', target: 'e' } },
        { data: { id: 'bc', weight: 5, source: 'b', target: 'c' } },
        { data: { id: 'ce', weight: 6, source: 'c', target: 'e' } },
        { data: { id: 'cd', weight: 2, source: 'c', target: 'd' } },
        { data: { id: 'de', weight: 7, source: 'd', target: 'e' } },
        { data: { id: 'af', weight: 7, source: 'a', target: 'f' } },
        { data: { id: 'fg', weight: 7, source: 'f', target: 'g' } },
        { data: { id: 'cg', weight: 7, source: 'c', target: 'g' } },
      ]
    },

  layout: {
    name: 'breadthfirst',
    directed: true,
    roots: '#a',
    padding: 2
  }
});

var workspace = Blockly.inject('blocklyDiv',{toolbox: document.getElementById('toolbox')});
BlocklyStorage.backupOnUnload();
BlocklyStorage.restoreBlocks(workspace);
if (workspace.getAllBlocks().length == 0) {

  console.log("loading BFS")
  var xml = Blockly.Xml.textToDom(`<xml xmlns="https://developers.google.com/blockly/xml"><variables><variable id="oFa7R%4o2RiA4s0?}-h3">q</variable><variable id="NW9?{:f:P$Ld;*oq?Cai">root</variable><variable id="w#AjFd4H2M$}f5Q7]7v[">v</variable><variable id="eit}I_1_+O.It[E4{6tb">w</variable></variables><block type="variables_set" id="^{c-%nMmkGX8FU=M[TyI" x="51" y="31"><field name="VAR" id="oFa7R%4o2RiA4s0?}-h3">q</field><value name="VALUE"><block type="lists_create_empty" id="f3NTZvxr2V?IQCDPR)z9"></block></value><next><block type="variables_set" id="t=COh{GB9O5I__+4YlY0"><field name="VAR" id="NW9?{:f:P$Ld;*oq?Cai">root</field><value name="VALUE"><block type="vertex_get" id="UYA#^|(1U4d4qZam.iA_"><field name="ID">a</field></block></value><next><block type="list_enqueue" id="A@{@XVY|~AH;gN:CN3ga"><value name="ENQUEUE"><block type="variables_get" id="dY*!I-{bKmB=p#n[IUdp"><field name="VAR" id="NW9?{:f:P$Ld;*oq?Cai">root</field></block></value><value name="LIST"><block type="variables_get" id="*IjsH-Y;JK6^sEB;QRtr"><field name="VAR" id="oFa7R%4o2RiA4s0?}-h3">q</field></block></value><next><block type="controls_whileUntil" id="X5z%_nX$*+\`6.p~N\`]hj"><field name="MODE">WHILE</field><value name="BOOL"><block type="logic_negate" id="E9g0frC(xLWWQR0KutRX"><value name="BOOL"><block type="lists_isEmpty" id="_0wa040qyI}{DYJWsa*9"><value name="VALUE"><block type="variables_get" id="a:_3$Z[!8\`$01,0#dj\`O"><field name="VAR" id="oFa7R%4o2RiA4s0?}-h3">q</field></block></value></block></value></block></value><statement name="DO"><block type="variables_set" id="A|i\`8=RIlp\`104KZS|^6"><field name="VAR" id="w#AjFd4H2M$}f5Q7]7v[">v</field><value name="VALUE"><block type="list_dequeue" id=")g1[h;Ik+DO=iF*@ZA#B"><value name="LIST"><block type="variables_get" id="j!oBT6GOj(B!7%HdNu,G"><field name="VAR" id="oFa7R%4o2RiA4s0?}-h3">q</field></block></value></block></value><next><block type="controls_for_each" id=".l/2F;;nnm[q6l=s84wH"><field name="VAR" id="eit}I_1_+O.It[E4{6tb">w</field><value name="LIST"><block type="vertex_get_neighbours" id="ut)6gd!lV(Y|H)RLh~$w"><value name="NODE"><block type="variables_get" id="HM4TGPTKj/I6!%jkQ4rQ"><field name="VAR" id="w#AjFd4H2M$}f5Q7]7v[">v</field></block></value></block></value><statement name="DO"><block type="controls_if" id="WV*BrY3ZA=+T+7/,\`L\`)"><value name="IF0"><block type="logic_negate" id=")yt;=4\`[cf{:gCd0*Qs6"><value name="BOOL"><block type="vertex_is_discovered" id="Fy,y#7I[p;J)Z8Uj6G2L"><value name="NODE"><block type="variables_get" id="hbjnNH*lkRy6]kYZfSk1"><field name="VAR" id="eit}I_1_+O.It[E4{6tb">w</field></block></value></block></value></block></value><statement name="DO0"><block type="vertex_set_discovered" id="YgP5ZS-IEc?YtUE?}VDG"><value name="NODE"><block type="variables_get" id="jreGAQjrfJaBOU3JFV4k"><field name="VAR" id="eit}I_1_+O.It[E4{6tb">w</field></block></value><next><block type="list_enqueue" id="|Jn(,;@9hz_lilC(CZOY"><value name="ENQUEUE"><block type="variables_get" id="~Jr/6neuRz*R@_lV|i[$"><field name="VAR" id="eit}I_1_+O.It[E4{6tb">w</field></block></value><value name="LIST"><block type="variables_get" id="KeH4e~YAhTp4}5%IQ*xd"><field name="VAR" id="oFa7R%4o2RiA4s0?}-h3">q</field></block></value><next><block type="highlight_edge" id="=iE,d^k[0yq,Qs=TmLQ!"><value name="FROM"><block type="variables_get" id="vK~k09esNww4,.ga;ZA*"><field name="VAR" id="w#AjFd4H2M$}f5Q7]7v[">v</field></block></value><value name="NAME"><block type="variables_get" id="1?)TClcwXX?|:,Qe?+;z"><field name="VAR" id="eit}I_1_+O.It[E4{6tb">w</field></block></value></block></next></block></next></block></statement></block></statement></block></next></block></statement></block></next></block></next></block></next></block></xml>`);
  Blockly.Xml.domToWorkspace(xml, workspace);
}

// Register button callbacks
workspace.registerButtonCallback("createListVariable", function(button) {
  return Blockly.Variables.createVariableButtonHandler(button.getTargetWorkspace(), null, '');
});

// Whenever the blocks change update code
function myUpdateFunction(event) {
  var code = Blockly.Python.workspaceToCode(workspace); //TODO make python generators
  // var code = Blockly.JavaScript.workspaceToCode(workspace);
  document.getElementById('outputDiv').innerHTML = code;
}
workspace.addChangeListener(myUpdateFunction);

var edgesToHighlight = [];
function highlightEdge(from, to) {
  edgesToHighlight.push(cy.$id(from.data().id+to.data().id+''))
}

function getVertex (id) {
  return cy.$id(id);
}

var i = 0;
var highlightNextEle = function(){
  if( i < edgesToHighlight.length ){
    var edge = edgesToHighlight[i];
    console.log(edge);
    edge.addClass('highlighted');
    edge.connectedNodes().addClass('highlighted')    

    i++;
    setTimeout(highlightNextEle, 1000);
  }
};

var animateGraph = function () {
  
  // clean up last run
  clean();

  var code = Blockly.JavaScript.workspaceToCode(workspace);
  console.log("Evaluating code: \n" + code);
  var result = eval(code);
  
  // kick off first highlight
  highlightNextEle();
}

function getNeighbours(vertex) {
  // return cy.$id(vertex).connectedEdges().targets();
  return vertex.connectedEdges().targets();
}

function clean() {
  // reset edges
  for (var edge of edgesToHighlight) {
    edge.removeClass('highlighted');

    // reset classes
    for (var node of edge.connectedNodes()) {
      node.removeClass('highlighted')
      node.data('discovered', false);
    }
  }
  edgesToHighlight = [];
  i = 0;
}