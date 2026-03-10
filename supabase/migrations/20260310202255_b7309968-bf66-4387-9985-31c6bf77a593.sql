
-- Events table
CREATE TABLE public.events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  date text NOT NULL DEFAULT 'Coming Soon',
  location text NOT NULL DEFAULT 'TBA',
  tag text NOT NULL DEFAULT 'Event',
  poster_url text,
  created_at timestamp with time zone NOT NULL DEFAULT now()
);

ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;

-- Anyone can read events
CREATE POLICY "Anyone can view events" ON public.events
  FOR SELECT TO public USING (true);

-- Anyone can insert (admin password checked in app)
CREATE POLICY "Anyone can insert events" ON public.events
  FOR INSERT TO public WITH CHECK (true);

-- Anyone can update events
CREATE POLICY "Anyone can update events" ON public.events
  FOR UPDATE TO public USING (true) WITH CHECK (true);

-- Anyone can delete events
CREATE POLICY "Anyone can delete events" ON public.events
  FOR DELETE TO public USING (true);

-- Storage bucket for event posters
INSERT INTO storage.buckets (id, name, public) VALUES ('event-posters', 'event-posters', true);

-- Storage policies
CREATE POLICY "Anyone can upload event posters" ON storage.objects
  FOR INSERT TO public WITH CHECK (bucket_id = 'event-posters');

CREATE POLICY "Anyone can view event posters" ON storage.objects
  FOR SELECT TO public USING (bucket_id = 'event-posters');

CREATE POLICY "Anyone can delete event posters" ON storage.objects
  FOR DELETE TO public USING (bucket_id = 'event-posters');
