/* Define an interface, in fact a kind of a type */
export interface Task {
    id?: number;
    text: string;
    day: string
    reminder: boolean
}