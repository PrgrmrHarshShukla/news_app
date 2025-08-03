export default function generateId() {
  return 'post_' + Date.now().toString(36) + '_' + Math.random().toString(36).slice(2, 6);
}
