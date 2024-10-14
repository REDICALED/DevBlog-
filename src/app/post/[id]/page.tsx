type Props = {
    params: {
      id: string;
    }
  }
  
//   export default function Post({params}: Props) {
//     return (
//       <>
//       <div>{params.id}포스트</div>
//       </>
//     )
//   }


import Postmain from '../../../components/post/Postmain';

export default function Post({params}: Props) {
    return (
        <div>
          <Postmain id={params.id}/>
        </div>
    );
}
