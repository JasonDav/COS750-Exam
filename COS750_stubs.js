Blockly.JavaScript['list_enqueue'] = function(block) {
  var value_enqueue = Blockly.JavaScript.valueToCode(block, 'ENQUEUE', Blockly.JavaScript.ORDER_ATOMIC);
  var value_list = Blockly.JavaScript.valueToCode(block, 'LIST', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_list + '.push(' + value_enqueue + ');\n';
  return code;
};

Blockly.JavaScript['list_dequeue'] = function(block) {
  var value_list = Blockly.JavaScript.valueToCode(block, 'LIST', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_list + '.shift()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['list_push'] = function(block) {
  var value_push = Blockly.JavaScript.valueToCode(block, 'PUSH', Blockly.JavaScript.ORDER_ATOMIC);
  var value_list = Blockly.JavaScript.valueToCode(block, 'LIST', Blockly.JavaScript.ORDER_ATOMIC);
  var code = value_list + '.push(' + value_enqueue + ');\n';
  return code;
};

Blockly.JavaScript['list_pop'] = function(block) {
  var value_list = Blockly.JavaScript.valueToCode(block, 'LIST', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_list + '.pop();\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['vertex_get_neighbours'] = function(block) {
  var value_node = Blockly.JavaScript.valueToCode(block, 'NODE', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'getNeighbours(' + value_node + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['vertex_set_discovered'] = function(block) {
  var value_node = Blockly.JavaScript.valueToCode(block, 'NODE', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_node + '.data(\'discovered\', true);\n';
  return code;
};

Blockly.JavaScript['vertex_is_discovered'] = function(block) {
  var value_node = Blockly.JavaScript.valueToCode(block, 'NODE', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_node + '.data(\'discovered\') === true';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

/*
ele.data( name )

Get a particular data field for the element.

ele.data( name, value ) 
Set a particular data field for the element.
*/

Blockly.JavaScript['highlight_edge'] = function(block) {
  var value_from = Blockly.JavaScript.valueToCode(block, 'FROM', Blockly.JavaScript.ORDER_ATOMIC);
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'highlightEdge(' + value_from + ', ' + value_name + ');\n';
  return code;
};

Blockly.JavaScript['highlight_vertex'] = function(block) {
  var value_vertex = Blockly.JavaScript.valueToCode(block, 'VERTEX', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'highlightVertex(' + value_vertex + ');\n';
  return code;
};

Blockly.JavaScript['vertex_get'] = function(block) {
  var text_id = block.getFieldValue('ID');
  // TODO: Assemble JavaScript into code variable.
  var code = 'getVertex(\'' + text_id + '\')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['controls_for_each'] = function(block) {
  // For each loop.
  var variable0 = Blockly.JavaScript.variableDB_.getName(
      block.getFieldValue('VAR'), Blockly.VARIABLE_CATEGORY_NAME);
  var argument0 = Blockly.JavaScript.valueToCode(block, 'LIST',
      Blockly.JavaScript.ORDER_ASSIGNMENT) || '[]';
  var branch = Blockly.JavaScript.statementToCode(block, 'DO');
  branch = Blockly.JavaScript.addLoopTrap(branch, block);
  var code = '';
  // Cache non-trivial values to variables to prevent repeated look-ups.
  var listVar = argument0;
  if (!argument0.match(/^\w+$/)) {
    listVar = Blockly.JavaScript.variableDB_.getDistinctName(
        variable0 + '_list', Blockly.VARIABLE_CATEGORY_NAME);
    code += 'var ' + listVar + ' = ' + argument0 + ';\n';
  }
  var indexVar = Blockly.JavaScript.variableDB_.getDistinctName(
      variable0, Blockly.VARIABLE_CATEGORY_NAME);
  // branch = Blockly.JavaScript.INDENT + variable0 + ' = ' +
  //     listVar + '[' + indexVar + '];\n' + branch;
  code += 'for (var ' + variable0 + ' of ' + listVar + ') {\n' + branch + '}\n';
  return code;
};

Blockly.JavaScript['text_console_log'] = function(block) {
  var text_text = block.getFieldValue('TEXT');
  var code = 'console.log(\'' + text_text + '\');\n';
  return code;
};