Blockly.Blocks['list_enqueue'] = {
  init: function() {
    this.appendValueInput("ENQUEUE")
        .setCheck(null)
        .appendField("Enqueue");
    this.appendDummyInput()
        .appendField("into");
    this.appendValueInput("LIST")
        .setCheck("Array");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['list_dequeue'] = {
  init: function() {
    this.appendValueInput("LIST")
        .setCheck("Array")
        .appendField("Dequeue from");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['list_push'] = {
  init: function() {
    this.appendValueInput("PUSH")
        .setCheck(null)
        .appendField("Push");
    this.appendDummyInput()
        .appendField("onto");
    this.appendValueInput("LIST")
        .setCheck("Array");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['list_pop'] = {
  init: function() {
    this.appendValueInput("LIST")
        .setCheck("Array")
        .appendField("Pop from");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['vertex_get_neighbours'] = {
  init: function() {
    this.appendValueInput("NODE")
        .setCheck(null)
        .appendField("Get neighbors of");
    this.setOutput(true, "Array");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['vertex_set_discovered'] = {
  init: function() {
    this.appendValueInput("NODE")
        .setCheck(null)
        .appendField("Set discovered");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['vertex_is_discovered'] = {
  init: function() {
    this.appendValueInput("NODE")
        .setCheck(null)
        .appendField("Is discovered?");
    this.setOutput(true, "Boolean");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['highlight_edge'] = {
  init: function() {
    this.appendValueInput("FROM")
        .setCheck(null)
        .appendField("Highlight Edge from");
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("to");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['highlight_vertex'] = {
  init: function() {
    this.appendValueInput("VERTEX")
        .setCheck(null)
        .appendField("Highlight vertex");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['vertex_get'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Get vertex")
        .appendField(new Blockly.FieldTextInput("a"), "ID");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['controls_for_each'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("For each item")
        .appendField(new Blockly.FieldVariable("i"), "VAR");
    this.appendValueInput("LIST")
        .setCheck("Array")
        .appendField("in list");
    this.appendStatementInput("DO")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['text_console_log'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Log")
        .appendField(new Blockly.FieldTextInput("text"), "TEXT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};