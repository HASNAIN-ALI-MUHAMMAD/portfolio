import "../App.css"


export default function Skills(){
    return(
        <div className="flex flex-col p-1 w-full items-center text-2xl">
            <div className="w-full pl-3">
                <p className="text_transition2 [&>div]:hover:scale-99">
                    <h1 className="font-bold text_transition2 text-3xl">Languages</h1>
                    <div>
                        Javascript/Typescript
                        <p className="text-sm">Primary language of use and have done most of my projects in TS.</p>
                    </div>
                    
                    <div>
                        Python
                        <p className="text-sm">Learned for its effective use cases in machine learning and its easy to learn.</p>
                    </div>
                    <div>
                        C 
                        <span className="text-sm">(the best)</span>
                        <p className="text-sm"> A low level deep dive gave me C.</p>
                    </div>
                    <div>
                        SQL
                        <p className="text-sm">And SQL for databases.</p>
                    </div>
                </p>
                <p className="text_transition2 [&>div]:hover:scale-99">
                    <h1 className="font-bold text_transition2 text-3xl">Backend Frameworks and Technologies</h1>
                    <div>
                        Node Js
                        <p className="text-sm">Learned for doing backend in the same language ecosystem.</p>
                    </div>
                    <div>
                        Express Js
                        <p className="text-sm">Makes working with Node Js a bit easy.</p>
                    </div>
                    <div>
                        Flask
                        <p className="text-sm">The python go-to for API's.Allows me to connect to my python API's primarily fine-tuned models and custom models.</p>
                    </div>
                </p>
                <p className="text_transition2 [&>div]:hover:scale-99">
                    <h1 className="text-3xl font-bold">
                        Databases
                    </h1>
                    <div>
                        PostgresSQL
                        <p className="text-sm">For me the go-to database for local development.</p>
                    </div>
                    <div>
                        MongoDB
                        <p className="text-sm">Flexible API for web-based hooking and its easy and effective.</p>
                    </div>
                </p>
            </div>
        </div>
    )    
}