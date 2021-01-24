import React, { Suspense } from 'react';
import Layout from 'components/Layout';
import SearchField from 'components/SearchField';
import EditButton from 'components/EditButton';
import NoteList from 'components/NoteList';
import NoteListSkeleton from 'components/NoteListSkeleton';
import NoteSkeleton from 'components/NoteSkeleton';
import Note from 'components/Note';

// reactdomserver에서 아직 suspense 지원 안함.
const isServer = typeof window === 'undefined';

const IndexPage = ({ selectedId, isEditing, searchText }) => {
  return (
    <Layout>
      <section className="col sidebar">
        <section className="sidebar-header">
          <img
            className="logo"
            src="logo.svg"
            width="22px"
            height="20px"
            alt=""
            role="presentation"
          />
          <strong>Simple App</strong>
        </section>
        <section className="sidebar-menu" role="menubar">
          <SearchField />
          <EditButton noteId={null}>New</EditButton>
        </section>
        <nav>
          {/* <Suspense fallback={<NoteListSkeleton />}> */}
          <NoteList searchText={searchText} />
          {/* </Suspense> */}
        </nav>
      </section>
      <section key="key" className="col note-viewer">
        {/* <Suspense fallback={<NoteSkeleton isEditing={isEditing} />}> */}
        <Note selectedId={selectedId} isEditing={isEditing} />
        {/* </Suspense> */}
      </section>
    </Layout>
  );
};

export default IndexPage;
