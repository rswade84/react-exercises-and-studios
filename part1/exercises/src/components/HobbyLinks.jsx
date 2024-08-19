/* Create a new file called HobbyLinks for a new functional component called HobbyLinks.

In the HobbyLinks() function, define the variable hobbyLinks and assign it an array that contains two or more URLs for websites that pertain to your hobbies.

In the return statement for this component, add a set of <a> tags for the web links. Each link should be on its own line.

Inside each <a> tag, set the href attribute equal to a placeholder for an element in the hobbyLinks array:


*/

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
