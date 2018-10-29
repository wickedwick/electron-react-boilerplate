// @flow
import { connect } from 'react-redux';
import ContentList from '../components/ContentList';
// import { getContentItemsByTypeAsync } from '../utils/apiHelper';

function mapStateToProps() {
  const contentItems = {
    total: 63,
    items: [
      {
        id: 'd481272f-9122-4edb-ba45-62348cdce54c',
        createdBy: 'subject:59a0903659744c000128f562',
        lastModifiedBy: 'subject:59a0903659744c000128f562',
        data: {
          name: { en: "Robin's Article!" },
          article: {
            en:
              '<p>Test!!!</p><p><br></p><p>This is a test of the ability to modify in Borealis!</p><table style="width: 100%;"><tbody><tr><td style="width: 16.6667%;">a</td><td style="width: 16.6667%;"><br></td><td style="width: 16.6667%;"><br></td><td style="width: 16.6667%;"><br></td><td style="width: 16.6667%;">e</td><td style="width: 16.6667%;"><br></td></tr><tr><td style="width: 16.6667%;"><br></td><td style="width: 16.6667%;">b</td><td style="width: 16.6667%;"><br></td><td style="width: 16.6667%;">d</td><td style="width: 16.6667%;"><br></td><td style="width: 16.6667%; background-color: rgb(147, 101, 184);">f</td></tr><tr><td style="width: 16.6667%;"><br></td><td style="width: 16.6667%;"><br></td><td style="width: 16.6667%;">c</td><td style="width: 16.6667%;"><br></td><td style="width: 16.6667%;"><br></td><td style="width: 16.6667%;"><br></td></tr></tbody></table><p><span style="font-size: 14px; color: rgb(147, 101, 184);"><br></span></p><p><span style="font-size: 14px; color: rgb(147, 101, 184);">Another test</span></p><p><br></p><p><span style="font-size: 14px; color: rgb(147, 101, 184);">ABC!</span></p>'
          }
        },
        isPending: false,
        created: '2018-10-26T16:36:44.5768Z',
        lastModified: '2018-10-26T16:39:52.1502Z',
        status: 10,
        version: 2,
        contentTypeName: 'article',
        tags: [],
        tagsDeleted: [],
        categories: [
          {
            id: 'c19bb53f-e3d6-437d-b052-671a2ab0f506',
            name: 'Blue',
            systemUse: false
          }
        ],
        tagsDraft: [],
        tagsDeletedDraft: [],
        categoriesDraft: [
          {
            id: 'c19bb53f-e3d6-437d-b052-671a2ab0f506',
            name: 'Blue',
            systemUse: false
          }
        ],
        highlight: ''
      },
      {
        id: 'da37c5ed-8fd7-4e67-b518-63f14daec757',
        createdBy: 'subject:5af5f39af83dae15c4602c54',
        lastModifiedBy: 'subject:5af5f39af83dae15c4602c54',
        data: {
          name: { en: 'Design Review Oct 26 2018' },
          article: {
            en:
              '<h2>New Enhancements</h2><ul><li>Form Center Drag and Drop Usability Improvement -&nbsp;<a href="https://qatv5.civicplus.com/Admin/FormCenter/Item/Edit/52?categoryID=5">https://qatv5.civicplus.com/Admin/FormCenter/Item/Edit/52?categoryID=5</a></li></ul><p><br></p><h2>Keeping the Lights On</h2><ul><li>Style corrections for Preamble Components in Borealis</li></ul><p><br></p><h2>Other Developments</h2><ul><li>4DX Research to figure out styling of Material-UI components</li><li>More progress on the redesign:</li></ul>'
          }
        },
        isPending: false,
        created: '2018-08-30T22:45:20Z',
        lastModified: '2018-10-26T16:06:07.4353Z',
        status: 10,
        version: 47,
        contentTypeName: 'article',
        tags: ['Drag-and-drop', 'Engineering', 'Engineering design process'],
        tagsDeleted: [],
        categories: [
          {
            id: 'a754054f-3304-4298-b1b1-ab2c19d3f82e',
            name: 'Fire',
            systemUse: false
          },
          {
            id: '01a11b9e-90cc-4365-a3ed-2a730bcea4dc',
            name: 'Holiday',
            systemUse: false
          }
        ],
        primaryCategory: {
          id: 'a754054f-3304-4298-b1b1-ab2c19d3f82e',
          name: 'Fire',
          systemUse: false
        },
        tagsDraft: [
          'Drag-and-drop',
          'Engineering',
          'Engineering design process'
        ],
        tagsDeletedDraft: [],
        categoriesDraft: [
          {
            id: 'a754054f-3304-4298-b1b1-ab2c19d3f82e',
            name: 'Fire',
            systemUse: false
          },
          {
            id: '01a11b9e-90cc-4365-a3ed-2a730bcea4dc',
            name: 'Holiday',
            systemUse: false
          }
        ],
        highlight: ''
      },
      {
        id: '41ab9eb6-6941-43d4-97ad-82809d4d4eb7',
        createdBy: 'subject:5a6a04d6a3bc370001783c76',
        lastModifiedBy: 'subject:5b8012e9b0775e0001135ffa',
        data: {
          name: { en: 'test article modify 6666666666' },
          article: { en: '<p>Does this work ?</p>' }
        },
        isPending: false,
        created: '2018-10-18T23:51:55Z',
        lastModified: '2018-10-26T14:17:20.3995Z',
        status: 10,
        version: 18,
        contentTypeName: 'article',
        tags: ['test'],
        tagsDeleted: [],
        categories: [],
        tagsDraft: ['test'],
        tagsDeletedDraft: [],
        categoriesDraft: [],
        highlight: ''
      },
      {
        id: '5a23fe54-e1cf-4205-bc6e-0043daaf8237',
        createdBy: 'subject:5a6a04d6a3bc370001783c76',
        lastModifiedBy: 'subject:5a6a04d6a3bc370001783c76',
        data: {
          article: { en: '<p>test modify add 2</p>' },
          name: { en: 'test modify add 2' }
        },
        isPending: false,
        created: '2018-10-26T14:14:42.8259Z',
        lastModified: '2018-10-26T14:15:00.7832Z',
        status: 10,
        version: 2,
        contentTypeName: 'article',
        tags: [],
        tagsDeleted: [],
        categories: [],
        tagsDraft: [],
        tagsDeletedDraft: [],
        categoriesDraft: [],
        highlight: ''
      },
      {
        id: 'f8251863-e9f2-4dc0-ba1b-35aa89453e9c',
        createdBy: 'subject:5b8012e9b0775e0001135ffa',
        lastModifiedBy: 'subject:5b8012e9b0775e0001135ffa',
        data: {
          name: { en: 'The blue ocean is full of Jelly Fish' },
          article: {
            en: '<p>Sharks only think one thing: &quot;Eat that.&quot;</p>'
          }
        },
        isPending: false,
        created: '2018-10-26T14:05:10.0126Z',
        lastModified: '2018-10-26T14:07:17.4371Z',
        status: 10,
        version: 4,
        contentTypeName: 'article',
        tags: ['The Blue'],
        tagsDeleted: [],
        categories: [
          {
            id: 'c19bb53f-e3d6-437d-b052-671a2ab0f506',
            name: 'Blue',
            systemUse: false
          }
        ],
        tagsDraft: ['The Blue'],
        tagsDeletedDraft: [],
        categoriesDraft: [
          {
            id: 'c19bb53f-e3d6-437d-b052-671a2ab0f506',
            name: 'Blue',
            systemUse: false
          }
        ],
        highlight: ''
      },
      {
        id: 'd02c7f1a-ce3c-48a7-b9ae-de1d8423b2fc',
        createdBy: 'subject:5b8012e9b0775e0001135ffa',
        lastModifiedBy: 'subject:5b8012e9b0775e0001135ffa',
        data: {
          name: { en: 'Everything was Blue to Him' },
          article: { en: '<p>la dadidity da da ta</p>' }
        },
        isPending: false,
        created: '2018-10-25T19:01:37.9004Z',
        lastModified: '2018-10-25T19:01:37.9004Z',
        status: 10,
        version: 1,
        contentTypeName: 'article',
        tags: [],
        categories: [
          {
            id: 'c19bb53f-e3d6-437d-b052-671a2ab0f506',
            name: 'Blue',
            systemUse: false
          }
        ],
        tagsDraft: [],
        categoriesDraft: [
          {
            id: 'c19bb53f-e3d6-437d-b052-671a2ab0f506',
            name: 'Blue',
            systemUse: false
          }
        ],
        highlight: ''
      },
      {
        id: '7441597d-d5ed-462d-b39d-3e9b8ede04b2',
        createdBy: 'subject:59a0903659744c000128f562',
        lastModifiedBy: 'subject:59a0903659744c000128f562',
        data: { name: { en: 'abc' }, article: { en: '<p>def</p>' } },
        isPending: false,
        created: '2018-10-25T15:03:05.4909Z',
        lastModified: '2018-10-25T15:03:05.4909Z',
        status: 10,
        version: 1,
        contentTypeName: 'article',
        tags: [],
        tagsDeleted: [],
        categories: [
          {
            id: '124c4218-2491-411a-8596-8a743698e8a4',
            name: 'Another system use only',
            systemUse: true
          }
        ],
        primaryCategory: {
          id: '124c4218-2491-411a-8596-8a743698e8a4',
          name: 'Another system use only',
          systemUse: true
        },
        tagsDraft: [],
        tagsDeletedDraft: [],
        categoriesDraft: [
          {
            id: '124c4218-2491-411a-8596-8a743698e8a4',
            name: 'Another system use only',
            systemUse: true
          }
        ],
        highlight: ''
      },
      {
        id: '5838710c-7b87-4664-abe3-8fcdcdb2983d',
        createdBy: 'subject:59a0903659744c000128f562',
        lastModifiedBy: 'subject:59a0903659744c000128f562',
        data: { name: { en: 'robin' }, article: { en: '<p>test</p>' } },
        isPending: false,
        created: '2018-10-23T23:15:08.0478Z',
        lastModified: '2018-10-23T23:15:08.0478Z',
        status: 10,
        version: 1,
        contentTypeName: 'article',
        tags: [],
        tagsDeleted: [],
        categories: [
          {
            id: 'c19bb53f-e3d6-437d-b052-671a2ab0f506',
            name: 'Blue',
            systemUse: false
          }
        ],
        primaryCategory: {
          id: 'c19bb53f-e3d6-437d-b052-671a2ab0f506',
          name: 'Blue',
          systemUse: false
        },
        tagsDraft: [],
        tagsDeletedDraft: [],
        categoriesDraft: [
          {
            id: 'c19bb53f-e3d6-437d-b052-671a2ab0f506',
            name: 'Blue',
            systemUse: false
          }
        ],
        highlight: ''
      },
      {
        id: '56efa9f3-cf43-4142-a842-0e4e5d50e91d',
        createdBy: 'subject:5b8012e9b0775e0001135ffa',
        lastModifiedBy: 'subject:5b8012e9b0775e0001135ffa',
        data: { name: { en: 'Test' }, article: { en: '<p>Test Words</p>' } },
        isPending: false,
        created: '2018-10-23T15:44:34.7679Z',
        lastModified: '2018-10-23T15:46:50.1632Z',
        status: 10,
        version: 3,
        contentTypeName: 'article',
        tags: [],
        tagsDeleted: [],
        categories: [
          {
            id: '6e8d20c3-a596-4940-bfa1-32d6586723e5',
            name: 'Police',
            systemUse: false
          },
          {
            id: '53b7979c-eb44-4254-865f-db109e8c6aea',
            name: 'Perseus',
            systemUse: false
          }
        ],
        primaryCategory: {
          id: '6e8d20c3-a596-4940-bfa1-32d6586723e5',
          name: 'Police',
          systemUse: false
        },
        tagsDraft: [],
        tagsDeletedDraft: [],
        categoriesDraft: [
          {
            id: '6e8d20c3-a596-4940-bfa1-32d6586723e5',
            name: 'Police',
            systemUse: false
          },
          {
            id: '53b7979c-eb44-4254-865f-db109e8c6aea',
            name: 'Perseus',
            systemUse: false
          }
        ],
        highlight: ''
      },
      {
        id: 'b064e9eb-67fc-49b3-a2a9-1ed44005f7e0',
        createdBy: 'subject:5b8012e9b0775e0001135ffa',
        lastModifiedBy: 'subject:5b8012e9b0775e0001135ffa',
        data: {
          name: { en: '12 Alarm Fire at Hardees' },
          article: { en: '<p>Something and some stuff and things.</p>' }
        },
        isPending: false,
        created: '2018-10-17T21:47:15.2967Z',
        lastModified: '2018-10-17T21:47:15.2968Z',
        status: 10,
        version: 1,
        contentTypeName: 'article',
        tags: [],
        categories: [
          {
            id: 'a754054f-3304-4298-b1b1-ab2c19d3f82e',
            name: 'Fire',
            systemUse: false
          }
        ],
        tagsDraft: [],
        categoriesDraft: [
          {
            id: 'a754054f-3304-4298-b1b1-ab2c19d3f82e',
            name: 'Fire',
            systemUse: false
          }
        ],
        highlight: ''
      }
    ]
  };
  return {
    contentItems
  };
}

export default connect(
  mapStateToProps,
  null
)(ContentList);
