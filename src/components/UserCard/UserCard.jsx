import { FETCH_STATUS } from 'constants/fetchStatus';

export const UserCard = () => {
  return (
    <div className="list-group-item list-group-item-action py-3 mb-4">
      <div className="d-flex w-100 align-items-center">
        <div className="ms-3 d-flex flex-column">
          <strong className="mb-1">{/* {data?.first_name} {data?.last_name} */}</strong>
          {/* <small className="text-muted">{data?.email}</small> */}
        </div>
      </div>
    </div>
  );
};
