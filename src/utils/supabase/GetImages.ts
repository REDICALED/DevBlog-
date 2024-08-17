import type { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from'@supabase/supabase-js';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);


  const { path } = req.query;

  if (typeof path !== 'string') {
    return res.status(400).json({ error: 'Invalid path parameter' });
  }

  try {
    const { data } = await supabase
      .storage
      .from('images') // Storage 버킷 이름
      .getPublicUrl(path);
    console.log(path);

    res.status(200).json({ url: data.publicUrl });
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
}
