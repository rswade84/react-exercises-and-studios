export default function HobbyLinks() {
  const hobbyLinks = [
    'https://www.youtube.com/',
    'https://www.netflix.com/',
    'https://www.google.com/',
  ];

  return (
    <div>
      <a href={hobbyLinks[0]}>Youtube University</a>
      <a href={hobbyLinks[1]}>Netflix</a>
      <a href={hobbyLinks[2]}>Google</a>
    </div>
  );
}
