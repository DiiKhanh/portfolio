import { useEffect } from 'react';
import { SectionName } from './types';
import { useInView } from 'react-intersection-observer';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { setActiveSection } from '@/redux/features/activeSectionSlice';

export function useSectionInView(sectionName: SectionName, threshold = 0.75) {

  const { ref, inView } = useInView({
    threshold
  });

  const isClick = useAppSelector(state => state.activeSectionReducer.isClick);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (inView && Date.now() - isClick > 1000) {
      dispatch(setActiveSection(sectionName));
    }
  }, [sectionName, isClick, dispatch, inView]);

  return {
    ref
  };
};
