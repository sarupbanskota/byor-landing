export { StackedAvatars };

const avatars = [
  {
    name: "avatar-1",
    imageUrl: "/for/avatar-1.jpeg",
  },
  {
    name: "avatar-2",
    imageUrl: "/for/avatar-2.jpeg",
  },
  {
    name: "avatar-3",
    imageUrl: "/for/avatar-3.jpeg",
  },
  {
    name: "avatar-4",
    imageUrl: "/for/avatar-4.jpeg",
  },
];

function StackedAvatars() {
  return (
    <div className="flex -space-x-1 overflow-hidden">
      {avatars.map(
        (avatar) =>
          avatar.imageUrl && (
            <div key={avatar.name} className="flex-shrink-0">
             <img
              className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
              src={avatar.imageUrl}
              alt={avatar.name}
              loading="lazy"
            />

            </div>
          ),
      )}
    </div>
  );
}
