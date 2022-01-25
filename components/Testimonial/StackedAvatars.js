export { StackedAvatars };

function StackedAvatars() {
  return (
    <div className="flex -space-x-1 overflow-hidden">
      <img
        className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
        src="https://pbs.twimg.com/profile_images/1384990837172424711/m4ZdabPi_400x400.jpg"
        alt=""
      />
      <img
        className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
        src="https://github.com/byarr.png"
        alt=""
      />
      <img
        className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
        src="https://stacks-production-us-east-1-upload.imgix.net/5c14812e-fca8-4984-a3c3-dedbeb6558fc.jpg"
        alt=""
      />
      <img
        className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
        src="https://avatars.githubusercontent.com/u/10102690?v=4"
        alt=""
      />
    </div>
  );
}
