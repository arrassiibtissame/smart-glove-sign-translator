export function TranslationCard ({translation}: any){
  return (
    <div>
      <h2>Translation</h2>
      <p>{translation || "No gesture detected"}</p>
    </div>
  );
}