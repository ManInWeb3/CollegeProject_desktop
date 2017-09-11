/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	config.toolbarGroups = [
		{ name: 'document', groups: [ 'mode', 'document', 'doctools' ] },
		{ name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
		{ name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] },
		{ name: 'forms', groups: [ 'forms' ] },
		'/',
		{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
		{ name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi', 'paragraph' ] },
		{ name: 'links', groups: [ 'links' ] },
		{ name: 'insert', groups: [ 'insert' ] },
		'/',
		{ name: 'styles', groups: [ 'styles' ] },
		{ name: 'colors', groups: [ 'colors' ] },
		{ name: 'tools', groups: [ 'tools' ] },
		{ name: 'others', groups: [ 'others' ] },
		{ name: 'about', groups: [ 'about' ] }
	];

	// config.removeButtons = 'Source,Save,Templates,NewPage,Preview,Print,Copy,Redo,Replace,SelectAll,Scayt,Find,Undo,Cut,Paste,PasteText,PasteFromWord,Form,Checkbox,Radio,TextField,Textarea,Select,Button,ImageButton,HiddenField,Bold,About,Maximize,ShowBlocks,BGColor,TextColor,Styles,Format,Font,FontSize,Iframe,PageBreak,SpecialChar,Smiley,HorizontalRule,Table,Flash,Image,Link,Unlink,Anchor,Language,JustifyRight,JustifyBlock,Subscript,Strike,Underline,Italic,CopyFormatting,NumberedList,Outdent,Blockquote,JustifyLeft,BidiLtr,BidiRtl,CreateDiv,JustifyCenter,Indent,BulletedList,RemoveFormat,Superscript';
	config.removeButtons = 'Source,Save,Templates,NewPage,Preview,Print,Copy,Redo,Replace,SelectAll,Scayt,Find,Undo,Cut,Paste,PasteText,PasteFromWord,Form,Checkbox,Radio,TextField,Textarea,Select,Button,ImageButton,HiddenField,Bold,About,Maximize,ShowBlocks,BGColor,TextColor,Styles,Format,Font,FontSize,Iframe,PageBreak,SpecialChar,Smiley,HorizontalRule,Flash,Image,Link,Unlink,Anchor,Language,JustifyRight,JustifyBlock,Subscript,Strike,Underline,Italic,CopyFormatting,NumberedList,Outdent,Blockquote,JustifyLeft,BidiLtr,BidiRtl,CreateDiv,JustifyCenter,Indent,BulletedList,RemoveFormat,Superscript';
	config.height = '70vh';
	config.disableNativeSpellChecker = true;
	// config.contentsCss: ["body {font-size: 18px;}"];
	config.menu_groups = 'clipboard';
	config.extraPlugins = 'wordcount,notification'; 
};