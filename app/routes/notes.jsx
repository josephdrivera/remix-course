import { redirect } from "@remix-run/node";
import NewNote, {links as newNoteLinks }  from "../components/NewNote";
import { getStoredNotes, storeNotes } from "../data/notes";

export default function NotesPage() {
    return (
        <main>
            <NewNote />
        </main>
    );
}


export async function action({request}) {
    const formData = await request.formData();
    const noteData = object.fromEntries([formData]);
    // validate noteData

    const notes = await getStoredNotes();
    notes.id = new Date().toISOString();
    const updatedNotes = existingNotes.concat(noteData);
    // store updatedNotes
    await storeNotes(updatedNotes);
    return redirect('/notes');

}

export function links() {
    return[ ...newNoteLinks()]
}