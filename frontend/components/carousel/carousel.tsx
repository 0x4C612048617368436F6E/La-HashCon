import DataSources from "@/values/sources";
import Image from "next/image";
import {Card, CardFooter} from "@heroui/card";
import { Link } from "@heroui/link";

const DataSourceSlider = ()=>{
    return(
        <div className="flex invisible lg:visible">
            {DataSources.map((item)=>
            <Card key={item.id} className="p-4 m-5">
            <Link isExternal key={item.id} href={item.URL}>
            <Image key={item.id} src={item.image} alt={item.name} width={64} height={64} className="hover:cursor-pointer"/>
            </Link>
            </Card>
            )}

        </div>
    )
}

export default DataSourceSlider;