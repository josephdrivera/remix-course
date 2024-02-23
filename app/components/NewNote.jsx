import styles from './NewNote.css';

function InputField({type, id, label, ...props}) {
	return (
		<p>
			<label htmlFor={id}>{label}</label>
			{type === "text" ? <input type="text" id={id} name={id} {...props} /> :
				<textarea id={id} name={id} {...props} />}
		</p>
	);
}

function NewNote() {
	return (
		<form method="post" id="note-form">
			<InputField type="text" id="title" label="Title" required/>
			<InputField type="textarea" id="content" label="Content" rows="5" required/>
			<div className="form-actions">
				<button>Add Note</button>
			</div>
		</form>
	);
}

export default NewNote;

export function links() {
	return [{rel: 'stylesheet', href: styles}];
}