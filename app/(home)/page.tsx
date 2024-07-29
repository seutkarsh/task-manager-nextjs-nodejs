import {Medal} from "lucide-react";
import {Button} from "@/components/ui/button"
import Link from "next/link";

const HomePage = ()=>{
    return <div className="flex items-center justify-center flex-col">
        <div className="flex items-center justify-center flex-col">
            <div className="mb-4 flex items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-xl uppercase">
                <Medal className="h-6 w-6 mr-2" />
                Task Manager Assignment
            </div>
            <h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6">Task Manager to Manager Tasks Efficiently
            </h1>
        </div>

        <Button className="m-6" size="lg" asChild>
            <Link href="/sign-up">Get Started for Free</Link>
        </Button>
    </div>
}

export default HomePage