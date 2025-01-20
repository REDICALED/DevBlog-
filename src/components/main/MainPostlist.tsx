import dynamic from "next/dynamic";

const MainMasonry = dynamic(() => import('@/components/main/MainMasonry'), { ssr: false });

export default async function Notes(props: any) {

  return <div>
    <MainMasonry SuggestArray={props.SuggestArray} supaArray={props.SupaArray} tagArray={props.tagArray} puretagArray={props.puretagArray}/>
  </div>;
}