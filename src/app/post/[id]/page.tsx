type Props = {
    params: {
      id: string;
    }
  }

import Postmain from '../../../components/post/Postmain';

export default function Post({params}: Props) {
    return (
        <div className='cursor-none'>
          <Postmain id={params.id}/>
        </div>
    );
}
