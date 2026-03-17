import { LayoutList, NotebookPen } from "lucide-react";
import { useState } from "react";

const Note = () => {
    const [Heading, setHeading] = useState("");
    const [Notes, setNots] = useState("");
    const [Tasks, setTasks] = useState([]);

    const SubmitForm = () => {
        console.log("New Task Create :", {
            "Task Heading": Heading,
            Notes: Notes,
        });

        let Add = [...Tasks];
        Add.push({ Title: Heading, Task: Notes, date: new Date().toLocaleDateString() });
        setTasks(Add);

        console.log("Tasks : ", Tasks);

        setHeading("");
        setNots("");
    };
    return (
        <>
            <section className="flex item-center Justify-center w-full h-screen">
                <div className="w-1/2 h-screen flex items-center justify-center">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            SubmitForm();
                        }}
                    >
                        <div className="flex gap-4 items-center my-4">
                            <NotebookPen
                                strokeWidth={3}
                                className="w-32 h-32 text-green-700"
                            />
                            <h1 className="text-5xl font-bold text-green-950 text-shadow-lg">
                                Add Your Task
                            </h1>
                        </div>

                        <input
                            type="text"
                            className="w-full bg-green-200 rounded-md px-4 py-2 my-2"
                            placeholder="Enter your task"
                            value={Heading}
                            onChange={(e) => {

                                if (e.target.value.length >= 10) {
                                    alert("Task Heading is too long");
                                    return;
                                }
                                setHeading(e.target.value);
                            }}
                        />
                        <div className="relative w-full my-2">
                            <textarea
                                rows={8}
                                className="w-full bg-green-200 rounded-md px-4 py-2 pr-12"
                                placeholder="Enter your description"
                                value={Notes}
                                onChange={(e) => {
                                    if (e.target.value.length >= 100) {
                                        return;
                                    }
                                    setNots(e.target.value);
                                }}
                            />
                            <span className="absolute bottom-2 right-3 text-sm text-red-500">
                                {Notes.length}/100
                            </span>
                        </div>

                        <input
                            type="submit"
                            value="New Task"
                            className="w-full text-center px-4 py-2 rounded-md bg-green-900 text-green-100 active:scale-95 active:bg-green-100 active:text-green-900 transition-all font-semibold"
                        />
                    </form>
                </div>
                <div className="w-1/2 h-screen border-l-2 border-black border-dashed p-4 bg-[#faf3ee] overflow-auto">
                    <div className="flex justify-center items-center gap-4 my-4">
                        <LayoutList
                            strokeWidth={3}
                            className="w-10 h-10 text-[#582f0e] font-bold"
                        />
                        <h1 className="text-4xl text-[#582f0e]">Your Task</h1>
                    </div>
                    <div className="flex flex-wrap item-center justify-center gap-6 w-full h-screen ">
                        {Tasks.map((data, idx) => {
                            return (
                                <div className="border-2 border-[#582f0e] flex items-center justify-center p-2 rounded-4xl w-full h-72 max-w-72">

                                    <div className="w-full  max-w-68 h-68 bg-[#582f0e] rounded-3xl text-white p-4">

                                        <h1 className='text-4xl font-bold bg-white text-[#582f0e]/90 rounded-full h-12 w-12 flex items-center justify-center'>{idx + 1}</h1>
                                        <h2 className='text-3xl text-center my-1 font-h2'>{data.Title}</h2>
                                        <p className='text-xl my-1 text-wrap hyphens-auto'>{data.Task}</p>
                                        <p className='text-md text-[#faf3ee]/50 text-right'>{data.date}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                </div>
            </section>
        </>
    )
}

export default Note;