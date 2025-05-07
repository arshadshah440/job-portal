import React, { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { currentuser,error,currentstatus,fetchcurrentuser } from "../../../app/features/User/userSlice";
const ProfileSettings = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(currentuser);
  const errors= useSelector(error);
  const status = useSelector(currentstatus);

  // useEffect(() => {
  //   dispatch(fetchcurrentuser());
  // }, []);

  return (
    <>
      <section id="settings" className="tab-section hidden">
        <h2 className="text-xl font-semibold mb-4">Settings</h2>
        {/* <div className="bg-white p-4 rounded-lg shadow-sm space-y-4">
          <label className="block">
            <span className="text-gray-700 text-sm">Email Notifications</span>
            <select className="mt-1 block w-full border-gray-300 rounded">
              <option>Enabled</option>
              <option>Disabled</option>
            </select>
          </label>
          <label className="block">
            <span className="text-gray-700 text-sm">Timezone</span>
            <input
              type="text"
              className="mt-1 block w-full border-gray-300 rounded"
              value="UTC+0"
            />
          </label>
          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
            Save Changes
          </button>
        </div> */}
      </section>
    </>
  );
};

export default ProfileSettings;
