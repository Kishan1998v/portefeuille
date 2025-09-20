export default function getRandomGreeting(length) {
  const randomIndex = Math.floor(Math.random() * length);
  return randomIndex;
}
