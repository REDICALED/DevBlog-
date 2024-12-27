import MainMasonry from '@/components/main/MainMasonry';

export default async function Notes(props: any) {

  return <div>
    <MainMasonry supaArray={props.supaArray}/>
  </div>;
}