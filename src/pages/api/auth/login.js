import { serialize } from 'cookie'
 
export default async function handler(req, res) {
  const userData = req.body
  try {
    /* Fetch External API */
    const UNIQLCOCO_API = `http://192.168.1.5:8080/auth/login`
    const result = await fetch(
        UNIQLCOCO_API,
        {
            method: 'POST',
            headers: {
                'Content-Type' : "application/json",
            },
            body: JSON.stringify(userData),
        }
    )
    if (result.ok) {
        /* Generating cookie */
        const body = await result.json()
        console.log(body);
        // const { expiresIn, accessToken } = body
        // const cookie = serialize('access_token', accessToken, {
        //   httpOnly: true,
        //   maxAge: expiresIn,
        //   path: '/',
        // })
        // res.setHeader('Set-Cookie', cookie)
        // res.status(200).json({ message: 'Successfully set cookie!' })
    }
} catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Something went wrong.' })
}

}