import {redirect} from "@remix-run/node";
import {useLoaderData} from "@remix-run/react";
import NewNote, {links as newNoteLinks} from "../components/NewNote";
import NoteList, {links as NoteListLinks} from "../components/NoteList.jsx";
import {getStoredNotes, storeNotes} from "../data/notes";

export default function NotesPage() {
	const notes = useLoaderData();
	return (
		<main>
			<NewNote/>
			<NoteList notes={notes}/>
		</main>
	);
}

export async function loader() {
	const [notes] = await Promise.all([getStoredNotes()]);
	return notes;
}

export async function action({request}) {
	const noteData = convertFormDataToObject(await request.formData());
	noteData.id = new Date().toISOString();

	const notes = await getStoredNotes();
	const updatedNotes = [...notes, noteData];

	await storeNotes(updatedNotes);
	return redirect('/notes');
}

export function links() {
	return [...newNoteLinks(), ...NoteListLinks()]
}

function convertFormDataToObject(formData) {
	return Object.fromEntries(formData);
}