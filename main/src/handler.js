var serverLoadSize = 500;
var FileBrowseButton = React.createClass({
	getInitialState: function(){
		return{currentFile: false};
	}, //Initial state, no file accepted.
	handleFBBClick: function(event){ //File Browse Button clicked
		this.setState({currentFile: !this.state.currentFile});
	},
	handleFileSelection: function(e){

	},
	render: function(){ //Handles output to html
		var selectText = this.state.currentFile ? 'You have selected a file!' : 'You have no file selected';
			return(
				<p onClick={this.handleFBBClick}>
				<form ref="uploadForm" className="uploader" encType="multipart/form-data" onChange={this.handleChange}>
				<input ref="file" type="file" name="file" id="myFile" className="upload-file"/>
            	</form>
 	 			)
			{selectText}
			<p>Server Limit: {serverLoadSize}gb </p>
			<p> Your Upload: gb</p>
			</p> );
	},
});
React.render(
  <FileBrowseButton />,
  document.getElementById('content')
);




// var FileBrowserInit = React.createClass({displayName: 'fileBrowser', //Initalization of the entire thing
// 	render: function(){
// 		return(
// 			React.createElement('div', {className: "fileBrowser" },
// 				<div>
// 				<h1> File Browser </h1>
// 				<FileUploadList data={this.props.data}/> //json data 
// 				<UploadForm/> //from uploadform
// 				</div>
// 				)
// 			);
// 	}
// });
// var FileUploadList = React.createClass({ //The list of files uploaded
// 	render: function(){
// 		var fileNodes = this.props.data.map(function(comment){
// 			return(
// 				<File fileUploader={File.fileUploader}>
// 				{File.file}
// 				</File>
// 				);
// 		});
// 		return (
// 			<div className="fileUploadList">
// 			{fileNodes}
// 			</div>
// 			);
// 	}
// });

// var UploadForm = React.createClass({ //The upload form
// 	render: function(){
// 		return (
// 			<div className="uploadForm">
// 			"Upload Form"
// 			</div>
// 			);
// 	}
// });

// var File = React.createClass({ //Files, and the uploader
// 	render: function(){
// 		 var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
// 		/*file = name of the file,
// 		 fileUloader = name of the user
// 		 the span element allows us to use markup.*/
// 		return(
// 		<div className="file"> 
// 		<h2 className="fileUploader"> 
// 			{this.props.fileUploader}
// 		</h2>
// 			<span dangerouslySetInnerHTML={{__html: rawMarkup}} />
// 		</div>


// 		);
// 	}
// 	//JSON Data from SOURCE
// });
// var data = [
//   {fileUploader: "TK", file: "This is a filepath link"},
//   {fileUploader: "Preston", file: "This is also filepath link"}];
//   console.log(data);
// React.render(
//   <FileBrowserInit data={data} />,
//   document.getElementById('content')
// );