import fs from 'fs';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'data', 'submissions.json');

export interface ContactSubmission {
    id: string;
    type: 'contact';
    fname: string;
    lname: string;
    email: string;
    phone?: string;
    message: string;
    createdAt: string;
}

export interface QuoteSubmission {
    id: string;
    type: 'quote';
    name: string;
    email: string;
    phone: string;
    product: string;
    quantity: string;
    message: string;
    createdAt: string;
}

type Submission = ContactSubmission | QuoteSubmission;

// Ensure the data directory and file exist
function ensureDataFileExists() {
    const dir = path.dirname(dataFilePath);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
    if (!fs.existsSync(dataFilePath)) {
        fs.writeFileSync(dataFilePath, JSON.stringify([]));
    }
}

export function saveSubmission(submission: Omit<Submission, 'id' | 'createdAt'>) {
    try {
        ensureDataFileExists();
        const fileData = fs.readFileSync(dataFilePath, 'utf-8');
        const submissions: Submission[] = fileData ? JSON.parse(fileData) : [];
        
        const newSubmission: Submission = {
            ...submission,
            id: Math.random().toString(36).substring(2, 9),
            createdAt: new Date().toISOString()
        } as Submission;

        submissions.push(newSubmission);
        
        // Write back with pretty formatting
        fs.writeFileSync(dataFilePath, JSON.stringify(submissions, null, 2));
        return { success: true, id: newSubmission.id };
    } catch (error) {
        console.error('Error saving submission:', error);
        return { success: false, error: 'Failed to save submission' };
    }
}
