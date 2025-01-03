import dynamic from "next/dynamic";

const MainMasonry = dynamic(() => import('@/components/main/MainMasonry'), { ssr: false });

export default async function Notes(props: any) {

  return <div>
    <MainMasonry supaArray={props.SupaArray} tagArray={props.tagArray}/>
  </div>;
}