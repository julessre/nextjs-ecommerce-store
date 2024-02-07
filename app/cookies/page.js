import { getCookie } from '../../util/cookies';
import SetQuantityForm from '../workshops/[workshopID]/SetQuantityForm';

export default function SetCookiePage() {
  const testCookieValue = getCookie('testCookie');

  return (
    <>
      <div>Cookie Value: {testCookieValue}</div>
      <SetQuantityForm />
    </>
  );
}
