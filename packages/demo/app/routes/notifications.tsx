import { redirect } from '@remix-run/node';
import type { LoaderFunction, ActionFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import {
  useLoaderData,
  Form,
  useSubmit,
  useTransition,
} from '@remix-run/react';
import type { Notification } from './notifications.types';

const API = 'http://localhost:5001';

type LoaderData = { notifications: Notification[] };

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const search = new URLSearchParams(url.search);
  const searchResponse = await fetch(
    `${API}/search?type=${search.get('type') || ''}`
  );
  const notifications = await searchResponse.json();
  const data: LoaderData = { notifications };
  return json(data);
};

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const type = form.get('type');
  return redirect(`/notifications?type=${type}`);
};

export default function Notifications() {
  const { notifications } = useLoaderData<LoaderData>();
  const submit = useSubmit();
  const transition = useTransition();

  function handleChange(event: React.FormEvent<HTMLFormElement>) {
    submit(event.currentTarget, { replace: true });
  }

  return (
    <div className={classes['notifications__container']}>
      <h2 className={classes['notifications__title']}>Notifications</h2>

      <Form
        className={classes['notifications__search-form']}
        method="post"
        action="/notifications"
        onChange={handleChange}
      >
        <input
          className={classes['notifications__search-input']}
          type="text"
          name="type"
          placeholder="Type to filter events"
        />
      </Form>

      {transition.submission && <div>Searching...</div>}

      {notifications.map((notification) => (
        <div key={notification.id}>{JSON.stringify(notification)}</div>
      ))}
    </div>
  );
}

// prettier-ignore
const classes = {
  'notifications__container': 'notifications__container',
  'notifications__title': 'notifications__title',
  'notifications__search-form': 'notifications__search-form',
  'notifications__search-input': 'notifications__search-input',
};