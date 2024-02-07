import { useCandidacyRecord } from "../hooks/useSalesForceData";

export default function RecordDetailsComponent(){
const {candidacyRecord,loading, error,  fetchCandidacyRecord} = useCandidacyRecord()
return (

        <div>
          <button onClick={fetchCandidacyRecord} disabled={loading}>Fetch Candidate Details</button>
          {loading && <p>Loading...</p>}
          {error && <p>Error: {error}</p>}
          {candidacyRecord && (
            <div>
              <p>First Name: {candidacyRecord.First_Name__c}</p>
              <p>Last Name: {candidacyRecord.Last_Name__c}</p>
              <p>Year: {candidacyRecord.Year__c}</p>
              <p>Year of Experience: {candidacyRecord.Year_Of_Experience__c}</p>
            </div>
          )}
        </div>
  );
};

