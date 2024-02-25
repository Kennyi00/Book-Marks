import { useState, useEffect } from 'react'
import BookmarkList from './components/ListOfBookmarks/BookmarkList'
import styles from './App.module.scss'

export default function App() {
    const [bookmarks, setBookmarks] = useState([])
    const [newBookmark, setNewBookmark] = useState({ title: '', url: '' })

    const createBookmark = async () => {
        const body = { ...newBookmark }
        try {
            const response = await fetch('/api/bookmarks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            });
            if (!response.ok) throw new Error('Bad response')
            const createdBookmark = await response.json()
            setBookmarks((prevBookmarks) => [createdBookmark, ...prevBookmarks])
            setNewBookmark({ title: '', url: '' })
        } catch (error) {
            console.error('Failed', error)
        }
    }

    const updateBookmark = async (id, bookmarkToUpdate) => {

    }

    const deleteBookmark = async (id) => {
        try {
            const response = await fetch(`/api/bookmarks/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            if (!response.ok) {
                throw new Error(`Failed to delete ${id}: ${response.statusText}`)
            }
            setBookmarks(prevBookmarks => prevBookmarks.filter(bookmark => bookmark._id !== id))
        } catch (error) {
            console.error('Error deleting', error)
        }
    }

    const getBookmarks = async () => {
        try {
            const response = await fetch('/api/bookmarks')
            if (!response.ok) throw new Error('Bad response')
            const data = await response.json()
            setBookmarks(data.reverse())
        } catch (error) {
            console.error('Failed to fetch', error)
        }
    };

    useEffect(() => {
        getBookmarks()
    }, [])

    return (
        <div className={styles.App}>
            <BookmarkList
                newBookmark={newBookmark}
                setNewBookmark={setNewBookmark}
                createBookmark={createBookmark}
                bookmarks={bookmarks}
                updateBookmark={updateBookmark}
                deleteBookmark={deleteBookmark}
            />
        </div>
    )
}