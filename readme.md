# REGL Test

A while back, I started on a library that would let me drop a fragment shader into a page.
I wanted something where I didn't have to deal with the minutiae of working with low level WebGL.
I also didn't want to use threejs, awesome as it is, because I shouldn't need 500kb to put a fragment shader on the page.
I found [phenomenon](https://github.com/vaneenige/phenomenon) at the time, but it wasn't exactly what I was looking for (it seemed focused on particle rendering), so I started working on my own library.
I put that on hold because I was busy and trying to write abstractions over WebGL is hard (maybe just for me).
Then, I hear about REGL, and I'm like "well shit, someone's already done it".
So this is me trying it out.

It's not _exactly_ what I was going for, you still have to supply a vertex shader, but that's not a big deal.
Other than that, it's similar to what I had started on, essentially creating a render function, then calling that repeatedly with updated uniforms.
REGL isn't exactly huge, it's [34.5kB minified+gzipped](https://bundlephobia.com/result?p=regl@1.3.11), but it's not small either.

Either way it was really easy to use and get set up.
Once I found where I saved the fragment shader, it only took me 15 minutes or so to get it running.
The error messages were really useful as well, I really appreciate good error messages.

## Running

It's very minimal, just bundled with parcel. Install dependencies and run

```
npm start
```

to start.
