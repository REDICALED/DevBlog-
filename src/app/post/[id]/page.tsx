'use client';

type Props = {
    params: {
      id: string;
    }
  }

  import dynamic from 'next/dynamic';

const Postmain = dynamic(() => import('../../../components/post/Postmain'), {
  ssr: false
});

export default function Post({params}: Props) {

    return (
        <div className=' h-screen '>
          <Postmain id={params.id} />
        </div>
    );
}
