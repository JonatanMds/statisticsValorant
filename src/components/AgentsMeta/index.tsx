  import {Button} from "@/patters/Button";
import { CardMeta } from "./AgentsMetaCard";

export function AgentsMeta(){
  return(
    <div className="w-full flex justify-between items-center gap-6 mt-12 px-16 py-6 bg-gradient-to-l from-purple-100">
        <div className="flex flex-col justify-start gap-4">
          <h1 className="text-white-100">Agent Meta</h1>
          <p>Usage is determinaed by Pick Rate, which is the percentage
            of games an agent is picked by anu player.
          </p>
          <div>
            <Button textButton='SEE GUIDES' />
          </div>
        </div>
        <div className="w-full">
          <CardMeta />
        </div>
    </div>
  )
}